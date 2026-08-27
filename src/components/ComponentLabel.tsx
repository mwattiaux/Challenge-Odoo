import './ComponentLabel.css';

interface ComponentLabelProps {
  name: string;
}

export default function ComponentLabel({ name }: ComponentLabelProps) {
  return <div className="component-showcase-label">Component: &lt;{name} /&gt;</div>;
}