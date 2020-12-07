class Blender {
    static mix(...args) {
        let result = {};

        args.forEach(ob => {
            result = this[this._detect(ob)](result, ob);
        });

        return result;
    }

    static on(ob) {
        return {
            mix(...args) {
                let result = Blender.mix(...args);

                return Object.assign(ob, result);
            }
        }
    }

    static _object(target, ob) {
        return Object.assign(target, ob);
    }

    static _instance(target, ob) {
        target = this._object(target, ob);

        return this._prototype(target, ob.__proto__);
    }

    static _class(target, func) {
        return this._prototype(target, func.prototype);
    }

    static _prototype(target, prototype) {
        Object.getOwnPropertyNames(prototype).forEach(method => {
            if(method !== 'constructor') {
                target[method] = prototype[method];
            }
        });

        if(prototype.__proto__.constructor.name !== 'Object') {
            this._prototype(target, prototype.__proto__);
        }

        return target;
    }

    static _detect(ob) {
        switch(typeof ob) {
            case 'function':
                return '_class';
            default :
                return ob.__proto__.constructor.name === 'Object' ? '_object' : '_instance';
        }
    }
}

export default Blender;