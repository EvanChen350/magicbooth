import { fallbackLng, languages } from '@/app/i18n/settings';
import { useTranslation } from '@/app/i18n';
import {
  Contact,
  Feature,
  Hero,
  ProductDetail,
  OrderFlow,
  Scene,
  Solution,
  Gallery,
} from './_components';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
export const metadata = {
  title: 'MagicBooth | Mobile Booth | Office Solution',
  description:
    'MagicBooth is a solution for the lack of work place, noise suffering and privacy requirement.',
};

export default async function Home({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) {
    lng = fallbackLng;
  }
  const { t } = await useTranslation(lng);

  return (
    <>
      <Hero lng={lng} />
      <Scene />
      <Solution lng={lng} />
      <Feature t={t} />
      <ProductDetail lng={lng} />
      <OrderFlow />
      <Gallery />
      <Contact lng={lng} />
      <ScrollToTopButton />
    </>
  );
}
