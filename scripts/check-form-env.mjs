/**
 * Comprueba variables de entorno del formulario.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const envPath = resolve(process.cwd(), process.argv[2] ?? '.env');

if (!existsSync(envPath)) {
  console.error('✗ No existe .env — copia .env.example');
  process.exit(1);
}

const vars = {};
for (const rawLine of readFileSync(envPath, 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/)) {
  const line = rawLine.trim();
  if (!line || line.startsWith('#')) continue;
  const eq = line.indexOf('=');
  if (eq === -1) continue;
  vars[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
}

const endpoint = vars.PUBLIC_FORM_ENDPOINT ?? '';
const key = vars.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';

if (!endpoint || !key) {
  console.error('✗ Configura PUBLIC_FORM_ENDPOINT y PUBLIC_WEB3FORMS_ACCESS_KEY en .env');
  process.exit(1);
}

console.log('✓ Formularios configurados');
