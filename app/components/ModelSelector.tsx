import React, { useState } from "react";
import { useChat } from "../providers/ChatProvider";
import { Model } from "../utils/mistralai";
import classNames from "classnames";

const ModelSelector: React.FC = () => {
  const { currentModel, setModel } = useChat();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  interface ModelOption {
    name: Model;
    displayName: string;
    description: string;
  }

  const models: ModelOption[] = [
    {
      name: "mistral-large-latest",
      displayName: "Mistral Large",
      description: "Top reasoning capabilities.",
    },
    {
      name: "mistral-small-latest",
      displayName: "Mistral Small",
      description: "Good balance of accuracy and speed.",
    },
    {
      name: "codestral-latest",
      displayName: "Codestral",
      description: "Fast and specialized in code.",
    },
    {
      name: "pixtral-12b-2409",
      displayName: "Pixtral",
      description: "Prompt text and images.",
    },
    {
      name: "open-mistral-nemo",
      displayName: "Mistral Nemo",
      description: "Fast and cost-effective.",
    },
  ];

  const handleModelChange = (model: Model) => {
    setModel(model);
    setIsDropdownOpen(false);
  };

  return (
    <div className="tw-relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={classNames(
          "tw-text-lg tw-font-semibold tw-cursor-pointer tw-flex tw-items-center",
          "tw-px-3 tw-py-1 tw-rounded-md",
          "tw-text-gray-900 hover:tw-bg-gray-100",
          "dark:tw-text-gray-200 dark:hover:tw-bg-gray-800"
        )}
      >
        <span>{models.find((m) => m.name === currentModel)?.displayName}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tw-ml-2 icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </button>
      {isDropdownOpen && (
        <div
          className={classNames(
            "tw-absolute tw-top-full tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-mt-2 tw-min-w-48 tw-rounded-md tw-shadow-lg tw-z-10 tw-overflow-clip",
            "tw-bg-white dark:tw-bg-gray-900 tw-border tw-border-gray-200 dark:tw-border-gray-700"
          )}
        >
          <h2
            className={classNames(
              "tw-text-sm tw-font-medium tw-py-2 tw-px-4",
              "tw-text-gray-500 dark:tw-text-gray-400"
            )}
          >
            Mistral AI Models
          </h2>
          <div>
            {models.map((model) => (
              <button
                key={model.name}
                className={classNames(
                  "tw-block tw-w-full tw-text-left tw-px-4 tw-py-2",
                  "tw-text-gray-700 hover:tw-bg-gray-100",
                  "dark:tw-text-gray-200 dark:hover:tw-bg-gray-800"
                )}
                onClick={() => handleModelChange(model.name)}
              >
                <div className="tw-flex tw-items-center tw-justify-between">
                  <div>
                    <p className="tw-font-medium tw-text-gray-900 dark:tw-text-gray-200">
                      {model.displayName}
                    </p>
                    <p className="tw-text-xs tw-text-gray-500 dark:tw-text-gray-400">
                      {model.description}
                    </p>
                  </div>
                  {model.name === currentModel && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tw-shrink-0 tw-text-orange-500 dark:tw-text-orange-400 icon icon-tabler icons-tabler-outline icon-tabler-check"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelSelector;
