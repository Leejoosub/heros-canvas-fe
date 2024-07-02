import Header from "../Header";

interface LayoutProps {
  children: JSX.Element;
}
export default function Layout(props: LayoutProps) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-red">
      <Header appStarted={false} />
      {props.children}
    </div>
  );
}
