export default function Layout({ children }) {
  return (
    <div className="p-2 grid place-items-center h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200">
      {children}
    </div>
  );
}
