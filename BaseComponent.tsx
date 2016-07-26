import * as React from "react";

export class BaseComponent<Props, State>  extends React.Component<Props, State>  {
  constructor(props: Props){
        super(props);

        let basePropeties = [
            'props',
            'context',
            'refs',
            'updater',
            'constructor',
            'render',
            'isReactComponent',
            'setState',
            'forceUpdate'
        ]

        for (var index in this) {
            if (basePropeties.indexOf(index) == -1) {
                this[index] = this[index].bind(this);
            }
        }
    }
}
