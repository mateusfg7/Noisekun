import { FiSettings } from "react-icons/fi";

import { headerIconButton } from "~/components/header/styles";

type Props = {
  openModal: () => void;
};

export function TriggerButton({ openModal }: Props) {
  return (
    <button
      className={headerIconButton()}
      data-umami-event="Open config menu"
      onClick={openModal}
      title="Open config menu"
      type="button"
    >
      <FiSettings size={18} />
    </button>
  );
}
