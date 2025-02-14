import { createDocument } from '../../testing/document';
import { getProps, Props } from '../props/props.public';
import { dehydrate } from '@builder.io/qwik';
import { createStore } from '../use/use-store.public';

describe('q-element', () => {
  let document: Document;
  let div: HTMLElement;
  let qDiv: Props;
  beforeEach(() => {
    document = createDocument();
    div = document.createElement('div');
    document.body.appendChild(div);
    qDiv = getProps(div);
  });

  it('should serialize content', () => {
    const shared = createStore({ mark: 'CHILD' });
    const state = createStore({ mark: 'WORKS', child: shared, child2: shared });

    dehydrate(document);

    qDiv = getProps(div);
    expect(state).toEqual({ mark: 'WORKS', child: shared, child2: shared });
  });

  it('should serialize cyclic graphs', () => {
    const foo = createStore({ mark: 'foo', bar: {} });
    const bar = createStore({ mark: 'bar', foo: foo });
    foo.bar = bar;
    qDiv.foo = foo;

    dehydrate(document);

    qDiv = getProps(div);
    const foo2 = qDiv.foo;
    const bar2 = foo2.bar;
    expect(foo2.mark).toEqual('foo');
    expect(bar2.mark).toEqual('bar');
    expect(foo2.bar.foo == foo2).toBe(true);
  });
});
