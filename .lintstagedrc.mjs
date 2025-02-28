export default {
  '*.{js,jsx,ts,tsx}': (absoluteFilenames) => {
    console.log('📝 Archivos detectados:', absoluteFilenames);

    const filenames = absoluteFilenames.map((file) => path.relative(process.cwd(), file));
    console.log('📂 Archivos relativos:', filenames);

    return [
      `prettier -w --no-editorconfig ${filenames.join(' ')}`,
      `npx eslint ${filenames.join(' ')} --fix`,
      `pnpm lint:types`,
    ];
  }
};