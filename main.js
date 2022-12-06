const getInput = () => {
  return new Promise(function (resolve, reject) {
    const stdin = process.stdin;
    let data = '';

    stdin.setEncoding('utf8');
    stdin.on('data', function (chunk) {
      data += chunk;
    });

    stdin.on('end', function () {
      resolve(data);
    });

    stdin.on('error', reject);
  });
}

const main = async () => {
  const input = await getInput();
  const packageJson = JSON.parse(input);
  const deps = Object.keys(packageJson.dependencies);
  const devDeps = Object.keys(packageJson.dependencies);
  let output = '"Dependency Name", "Version"';
  deps.forEach((dependency) => output = `${output}\n"${dependency}", "${packageJson.dependencies[dependency]}"`);
  devDeps.forEach((dependency) => output = `${output}\n"${dependency}", "${packageJson.dependencies[dependency]}"`);

  console.log(output);
  return output;
}

main()
