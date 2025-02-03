import { fallbackLng, languages } from '@/app/i18n/settings';
import { Header, Footer } from '@/components/cui';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

// export async function generateMetadata({
//   params: { lng },
// }: {
//   params: {
//     lng: string;
//   };
// }) {
//   if (languages.indexOf(lng) < 0) lng = fallbackLng;
//   const { t } = await useTranslation(lng, 'second-page');

//   return {
//     title: t('title'),
//   };
// }

export default async function DefaultLayout({ children, params: { lng } }: any) {
  if (languages.indexOf(lng) < 0) {
    lng = fallbackLng;
  }
  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     disable: 'phone',
  //     duration: 700,
  //     easing: 'ease-out-cubic',
  //   });
  // });

  return (
    <>
      <Header lng={lng} />
      <main>{children}</main>
      <Footer lng={lng} border={true} />
    </>
  );
}
