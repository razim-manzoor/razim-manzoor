import FullPreview from './FullPreview';
export default async function Page({ searchParams }) {
  const params = await searchParams;
  const initialMode = ['recruiter', 'all'].includes(params.view) ? params.view : 'client';
  return <FullPreview initialMode={initialMode} copyUnavailable={params['copy-check'] === 'unavailable'} />;
}
