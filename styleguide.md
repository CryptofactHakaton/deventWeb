# Code style guide

Общие положение и рекомендации как писать стиль в проекте. Весь код должен ссотвествовать этим требованиям.

## Структура проекта

### React/Redux

1. Actions
```javascript
// counterActions.ts
export interface IActionIncCount {
     type: 'Increment/Count'
}

export const incCount = ():IActionIncCount => {
  type: INC_COUNT,
}
```

```javascript
// index.ts

import * as actions from './counterActions';

export {
    actions
}
```

2. Reducers
```javascript
// counter.ts
import { action } from '../actions';

export interface ICounterState {
    count: number;
}

type KnownAction = action.IActionIncCount;

export const reducer: Reducer<ICounterState> = (state: CounterState = initialState, action: KnownAction) => {
    switch (action.type) {
        case 'Increment/Count':
            return { count: state.count + 1 };
        default:
            // The following line guarantees that every action in the KnownAction
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    return state;
};

export {
    reducer,
    ICounterState
}
```

```javascript
// index.ts

import { reducer as counterReducer, ICounterState} from './counter.ts';

export {
    counterReducer,
    ICounterState
}
```

3. Modules
```javascript
// Component.ts

import * as React from 'react';

import Button from './Button';

interface IComponentProps extends React.Props<any> {
    stateProp: string;
    onClick: () => void;
}

export default class Component extends React.Component<IComponentProps, any> {
    render() {
        const { stateProp, onClick } = this.props;

        return (
            <div>
                <Button onClick={onClick}>
                    Нажми меня {stateProp}
                </Button>
            </div>
        );
    }
}
```
```javascript
// Button.ts

import * as React from 'react';

import Icon from './Icon';

export default = ({}) => {
    return (
        <button>
            <Icon />
        </button>
    );
};
```
```javascript
// ComponentContainer.ts
import { connect } from 'react-redux';

import { actions } from '../actions';
import Component from './Component';

const mapStateToProps = (state) => ({
    stateProp: state.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(actions.incCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
```
```javascript
// index.ts

import Component from './ComponentContainer';

export default Component;

```

## Общие положения

1. Обязательно использовать TSLint
2. [Остальные вопросы](https://github.com/Platypi/style_typescript)