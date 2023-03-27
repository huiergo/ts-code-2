function logged(value: undefined, { kind, name }: ClassFieldDecoratorContext) {
    if (kind === "field") {
        return function (initialValue: any) {
            return 99;
        };
    }
}

class C {
    @logged x = 1;
}

new C().x; // 99

