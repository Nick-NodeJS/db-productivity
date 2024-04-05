export interface MinimalContextInterface {
  // Descriptive Code-path i.e. AbiService, Integrations, Shield, etc
  module: string;
  // current action (if helpful) i.e. 'sync', 'fetchPools' etc
  action?: string;
}

export interface UnknownContextInterface extends MinimalContextInterface {
  [key: string]: any;
}

// Add Service ContextInterfaces Here
export type LoggingContextInterface = UnknownContextInterface | MinimalContextInterface;

export function createLoggingContext(context: { [key: string]: any }) {
  return `${Object.entries(context)
    .map((a) => a.join(':'))
    .join('][')}`;
}
