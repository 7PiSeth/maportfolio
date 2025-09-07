import { useEffect, useState, useCallback, useMemo } from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill  } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const ToggleTheme = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const meta = document.querySelector("meta[name='theme-color']");
    root.classList.toggle("dark", dark);
    if (meta) meta.content = dark ? "rgb(16,24,43)" : "rgb(194,205,219)";
  }, [dark]);

  const toggleDark = useCallback(() => setDark(d => !d), []);

  const icon = useMemo(
    () =>
      dark ? (
        <BsFillMoonStarsFill  size={16} className="text-white" />
      ) : (
        <FaSun size={16} className="text-red-500" />
      ),
    [dark]
  );

  return (
    <motion.label
      htmlFor="theme-toggle"
      className="fixed left-1/2.5 mt-2 z-10 inline-flex cursor-pointer"
      whileTap={{ scale: 0.9 }}
    >
      <input
        id="theme-toggle"
        type="checkbox"
        checked={dark}
        onChange={toggleDark}
        className="sr-only"
      />

      {/* Track */}
      <motion.span
        layout
        className={`w-16 h-8 rounded-full ${dark ? "bg-gray-800" : "bg-gray-300"}`}
        transition={{ duration: 0.3 }}
      />

      {/* Thumb */}
      <motion.span
        layout
        className={`absolute right-1 top-1 h-6 w-6 flex items-center justify-center rounded-full shadow-md ${
          dark ? "bg-gray-600" : "bg-white"
        }`}
        animate={{ x: dark ? 0 : -32 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={dark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: dark ? -90 : 90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: dark ? 90 : -90, scale: 0.6 }}
            transition={{ duration: 0.25 }}
          >
            {icon}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    </motion.label>
  );
};

export default ToggleTheme;