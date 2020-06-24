const fs = require('fs');
const SVGO = require('svgo');
const prettier = require('prettier');
const ICON_COMPONENT_TEMPLATE = require('./ICON_COMPONENT_TEMPLATE');

const ICON_FILE_PATH = 'src/icons';
const INDEX_FILE = `${ICON_FILE_PATH}/index.js`;
const ASSETS_FILE_PATH = `${ICON_FILE_PATH}/assets`;

const svgo = new SVGO({
  plugins: [
    { removeViewBox: false },
    { removeDimensions: true },
    { convertColors: { currentColor: true } },
    { prefixIds: { delim: '-' } },
    {
      addAttributesToSVGElement: {
        attributes: [{ className: '{classes}' }, { rest: 'rest' }]
      }
    }
  ]
});

const SVG_PROCESSES = [
  svg => svg.replace(/"{classes}"/, '{classes}'),
  (svg, filename) => svg.replace(/prefix/g, filename),
  svg => svg.replace(/stroke-width/g, 'strokeWidth'),
  svg => svg.replace(/stroke-linecap/g, 'strokeLinecap'),
  svg => svg.replace(/stroke-linejoin/g, 'strokeLinejoin'),
  svg => svg.replace(/clip-path/g, 'clipPath'),
  svg => svg.replace(/clip-rule/g, 'clipRule'),
  svg => svg.replace(/fill-rule/g, 'fillRule'),
  svg => svg.replace(/rest="rest"/g, '{...rest}')
];

const createSvg = async iconFile => {
  const svg = fs.readFileSync(`${ASSETS_FILE_PATH}/${iconFile}`, 'utf8');
  // optimise using svgo
  let optimisedSvg = (await svgo.optimize(svg)).data;
  // Create icon component
  for (let svgProcess of SVG_PROCESSES) {
    optimisedSvg = svgProcess(optimisedSvg, iconFile.split('.')[0]);
  }
  return optimisedSvg;
};

const TEMPLATE_PROCESSES = [
  (template, { componentName }) =>
    template.replace(/{{ICON_COMPONENT_NAME}}/gm, componentName),
  (template, { svg }) => template.replace(/{{ICON}}/, svg)
];

const createComponentFromTemplate = (componentName, svg) => {
  let component = ICON_COMPONENT_TEMPLATE;
  for (let templateProcess of TEMPLATE_PROCESSES) {
    component = templateProcess(component, {
      svg,
      componentName
    });
  }
  return component;
};

const makeComponentName = iconName =>
  iconName
    .split('-')
    .map(
      nameSegment => `${nameSegment[0].toUpperCase()}${nameSegment.substr(1)}`
    )
    .join('');

const createIconComponent = async (file, prettierConfig) => {
  const [iconName] = file.split('.');
  const componentName = `${makeComponentName(iconName)}Icon`;
  const componentFile = `${iconName}-icon.component.js`;
  const optimisedSvg = await createSvg(file);
  const iconComponent = createComponentFromTemplate(
    componentName,
    optimisedSvg
  );
  fs.writeFileSync(
    `${ICON_FILE_PATH}/${componentFile}`,
    prettier.format(iconComponent, prettierConfig)
  );
  const exportLine = `export { default as ${componentName} } from './${componentFile}';\n`;
  fs.appendFileSync(INDEX_FILE, exportLine, 'utf8');
};

const run = async () => {
  if (fs.existsSync(INDEX_FILE)) {
    fs.unlinkSync(INDEX_FILE);
  }
  fs.writeFileSync(INDEX_FILE, '', 'utf8');
  const prettierConfig = await prettier.resolveConfig(process.cwd());
  const svgFiles = fs
    .readdirSync(ASSETS_FILE_PATH)
    .filter(file => file.includes('.svg'));
  svgFiles.forEach(file => createIconComponent(file, prettierConfig));
};

run();
