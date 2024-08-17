import { motion } from "framer-motion";
import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  title: ReactNode;
  client: ReactNode;
  year: ReactNode;
}>;

export default function Project({ title, client, year, children }: Props) {
  return (
    <motion.div>
      <div className="bg-orange-100 h-[320px] md:h-[430px] rounded-[48px] overflow-hidden flex justify-center">
        {children}
      </div>
      <div className="flex justify-between text-xl px-6 md:px-10 py-4 font-medium items-center">
        <h2>
          {title} <span className="text-zinc-400">{client}</span>
        </h2>
        <h3>{year}</h3>
      </div>
    </motion.div>
  );
}
