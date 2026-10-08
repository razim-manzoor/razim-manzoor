import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ArrowRight, ArrowUpRight, Download, MessageCircle, Sun, Moon, Menu, X, Check, Copy, ChevronDown, Globe, Workflow, BrainCircuit, ChartSpline, Wrench } from 'lucide-react';
import { SERVICES_CATALOG, HANDOVER_GUARANTEES } from '../../../lib/services.ts';
import { USER_DATA } from '../../../lib/data.ts';

const root = path.dirname(fileURLToPath(import.meta.url));
const assets = path.join(root, 'assets');
fs.mkdirSync(assets, { recursive: true });
const icons = Object.fromEntries(Object.entries({ ArrowRight, ArrowUpRight, Download, MessageCircle, Sun, Moon, Menu, X, Check, Copy, ChevronDown, Globe, Workflow, BrainCircuit, ChartSpline, Wrench }).map(([name, Icon]) => [name, renderToStaticMarkup(React.createElement(Icon, { size: 20, strokeWidth: 1.7, 'aria-hidden': true }))]));
const { name, summary, contact, recruiterSnapshot, experience, education, certifications, skills } = USER_DATA;
fs.writeFileSync(path.join(root, 'data.json'), JSON.stringify({ services: SERVICES_CATALOG, handover: HANDOVER_GUARANTEES, person: { name, summary, contact, recruiterSnapshot, experience, education, certifications, skills }, icons }, null, 2) + '\n');
fs.copyFileSync('public/profilepic.jpeg', path.join(assets, 'portrait.jpeg'));
fs.copyFileSync('public/Razim_Manzoor_MBA_AI_Analytics.pdf', path.join(assets, 'resume.pdf'));
fs.copyFileSync('.next/static/media/caa3a2e1cccd8315-s.p.0wgildi0cnwt9.woff2', path.join(assets, 'geist-latin.woff2'));
console.log('Built preview data from the current catalogue and profile; reused portrait, resume and cached Geist.');
