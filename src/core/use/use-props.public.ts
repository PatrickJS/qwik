import { getProps, Props } from '../props/props.public';
import { getInvokeContext } from './use-core';
import { useHostElement } from './use-host-element.public';

export function useProps(): Props {
  const ctx = getInvokeContext();
  let props = ctx.props;
  if (!props) {
    props = ctx.props = getProps(useHostElement());
  }
  return props;
}
