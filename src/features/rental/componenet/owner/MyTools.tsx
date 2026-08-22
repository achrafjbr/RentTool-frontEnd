import { Calendar } from "lucide-react";
import Divider from "../../../../components/common/Divider";
import { motion } from "motion/react";
export default function MyTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "backInOut",
      }}
    >
      <p className="font-semibold text-lg tracking-wider text-gray-400">
        Mes outils mis en location (1)
      </p>

      <Divider padding="pt-5" />
      <NoToolFound />
    </motion.div>
  );
}

export function NoToolFound() {
  return (
    <div className="w-full p-20 rounded-lg border border-gray-200 border-dashed shadow ">
      <div className="flex justify-center flex-col items-center gap-3.5">
        <div className="border-gray-100 p-3 rounded-full bg-gray-400/10  ">
          <Calendar className={`text-gray-400`} />
        </div>
        <p className="font-bold text-sm text-center text-gray-400 space-y-1.5">
          Aucune outil proposer pour la location .
        </p>
        <p className="font-light text-sm text-center text-gray-400">
          Les réservations validées apparaîtront ici.
        </p>
      </div>
    </div>
  );
}
