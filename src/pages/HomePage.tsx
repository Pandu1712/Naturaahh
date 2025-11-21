import HeroCarousel from '../components/HeroCarousel';
import CategoriesSection from '../components/CategoriesSection';

interface HomePageProps {
  onCategoryClick: (categoryId: string) => void;
}

export default function HomePage({ onCategoryClick }: HomePageProps) {
  return (
    <div>
      <HeroCarousel />
      <CategoriesSection onCategoryClick={onCategoryClick} />
    </div>
  );
}
