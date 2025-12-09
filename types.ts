export interface SlideProps {
  isActive: boolean;
}

export interface NavProps {
  currentSlide: number;
  totalSlides: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}
