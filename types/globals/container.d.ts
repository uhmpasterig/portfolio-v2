declare global {
  namespace Component {
    type HasChild = {
      children: React.ReactNode;
    };

    type HasClass = {
      className?: string;
    };

    type HasChildAndClass = HasChild & HasClass;
  }
}
export {}