import { createElement, useEffect, useState } from 'react';
import type {
  ComboBoxProps,
  ListBoxItemProps,
  ValidationResult,
} from 'react-aria-components';
import {
  Button,
  ComboBox,
  FieldError,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Text,
} from 'react-aria-components';
import { useAsyncList } from 'react-stately';

import { http } from '../../shared/api/http';

interface RegionResponse {
  result: Record<
    string,
    {
      full: string;
      short: string;
    }
  >;
}

interface Character {
  abbr: string;
  full: string;
  short: string;
}

interface SelectRegionProps<T extends object>
  extends Omit<ComboBoxProps<T>, 'children'> {
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export const SelectRegion = <T extends object>({
  description,
  errorMessage,
  ...props
}: SelectRegionProps<T>) => {
  const [options, setOptions] = useState<Character[]>([]);
  const [majorId, setMajorId] = useState<any>();

  useEffect(() => {
    http.get<RegionResponse>('/auxx/get-regions').then(({ data }) => {
      setOptions(
        Object.keys(data.result).map((key) => {
          return {
            abbr: key,
            full: data.result[key].full,
            short: data.result[key].short,
          };
        }),
      );
    });
  }, []);

  return (
    <ComboBox
      {...props}
      className="flex flex-col gap-1 w-[180px]"
      menuTrigger="focus"
      onSelectionChange={setMajorId}
    >
      <div className="flex rounded-lg bg-white transition ring-1 ring-[#D7D9DC] focus-within:ring-[#3B82F6]">
        <Input className="flex-1 w-full border-none p-3 text-sm font-medium text-[#282B2E] bg-transparent outline-none" />

        <Button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L10 11.5858L14.2929 7.29289C14.6834 6.90237 15.3166 6.90237 15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L10 14.4142L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289Z"
              fill="#282B2E"
            />
          </svg>
        </Button>
      </div>

      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover className="!max-h-60 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
        <ListBox items={options} className="outline-none p-1">
          {(item) => <ListBoxItem id={item.abbr}>{item.short}</ListBoxItem>}
        </ListBox>
      </Popover>
    </ComboBox>
  );
};
