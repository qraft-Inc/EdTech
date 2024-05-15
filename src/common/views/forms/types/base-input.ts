export interface BaseInputTypes {
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}
