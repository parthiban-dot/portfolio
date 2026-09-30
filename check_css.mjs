async function main() {
  const html = await (await fetch('http://localhost:3000')).text();
  const regex = /href="(\/_next\/static\/[^"]+\.css[^"]*)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const cssUrl = match[1];
    const css = await (await fetch('http://localhost:3000' + cssUrl)).text();
    console.log('In ' + cssUrl + ':');
    console.log('  innerOrbit:', css.includes('innerOrbit'));
    console.log('  spinSlow:', css.includes('spinSlow'));
    console.log('  counterOrbit:', css.includes('counterOrbit'));
    console.log('  prefers-reduced-motion:', css.includes('prefers-reduced-motion'));
  }
}
main().catch(console.error);
