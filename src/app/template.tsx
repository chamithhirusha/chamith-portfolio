import MotionPage from "./components/motion/MotionPage";

export default function Template({ children }: { children: React.ReactNode }) {
  return <MotionPage>{children}</MotionPage>;
}
