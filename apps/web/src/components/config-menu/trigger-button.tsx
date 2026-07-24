import { FiSettings } from "react-icons/fi";

type Props = {
  openModal: () => void;
};
export function TriggerButton({ openModal }: Props) {
  return (
    <button
      className="text-primary-foreground text-xl opacity-90 hover:opacity-100"
      data-umami-event="Open config menu"
      onClick={openModal}
      title="Open config menu"
      type="button"
    >
      <FiSettings />
    </button>
  );
}
