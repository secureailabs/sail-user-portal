export interface ITransitionTypes {
  transitionDelay: number;
  transitionDuration: number;
  transitionTimingFunction:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'linear'
    | 'step-start'
    | 'step-end';
}

export interface ITransitionExportTypes {
  transitionDelay?: string;
  transitionDuration?: string;
  transitionTimingFunction?:
    | 'ease'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'linear'
    | 'step-start'
    | 'step-end';
}

export const transitionSupport = ({
  transitionDelay,
  transitionDuration,
  transitionTimingFunction
}: Partial<ITransitionTypes>): ITransitionExportTypes => {
  let final: ITransitionExportTypes = {};

  if (transitionDelay) {
    final = { ...final, transitionDelay: `${transitionDelay}s` };
  }
  if (transitionDuration) {
    final = { ...final, transitionDuration: `${transitionDuration}s` };
  }
  if (transitionTimingFunction) {
    final = { ...final, transitionTimingFunction };
  }

  return final;
};
