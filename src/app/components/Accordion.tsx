'use client';

import { Chevron } from "@/components/Icons";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
  isOpen: boolean
}

export const Accordion = ({question, answer, isOpen}: Props) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div  className="p-3 bg-[#0e1111] rounded-sm">
      <div onClick={() => setOpen(!open)} className="cursor-pointer flex items-center justify-between">
        { question }
        <Chevron customClass={`w-4 h-4 stroke-white ${open ? 'rotate-[270deg]' : 'rotate-[90deg]'} transition-all`} />
      </div>
      <div className={`opacity-[0.5] ${open ? 'max-h-[1000px] my-4' : 'max-h-[0px]'} overflow-hidden transition-all`}>{ answer }</div>
    </div>
  );
};
