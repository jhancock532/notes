import fs from 'fs';
import path from 'path';

export const TECH_PATH = path.join(process.cwd(), 'notes');

export const techFilePaths = fs
  .readdirSync(TECH_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
