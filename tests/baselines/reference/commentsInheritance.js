//// [commentsInheritance.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var c1 = (function () {
    function c1() {
    }
    // i1_f1
    c1.prototype.i1_f1 = function () {
    };

    c1.prototype.i1_nc_f1 = function () {
    };

    /** c1_f1*/
    c1.prototype.f1 = function () {
    };

    /** c1_nc_f1*/
    c1.prototype.nc_f1 = function () {
    };
    return c1;
})();
var i1_i;
var c1_i = new c1();

// assign to interface
i1_i = c1_i;
var c2 = (function () {
    /** c2 constructor*/
    function c2(a) {
        this.c2_p1 = a;
    }
    /** c2 c2_f1*/
    c2.prototype.c2_f1 = function () {
    };

    Object.defineProperty(c2.prototype, "c2_prop", {
        /** c2 c2_prop*/
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });

    c2.prototype.c2_nc_f1 = function () {
    };
    Object.defineProperty(c2.prototype, "c2_nc_prop", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });

    /** c2 f1*/
    c2.prototype.f1 = function () {
    };

    Object.defineProperty(c2.prototype, "prop", {
        /** c2 prop*/
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });

    c2.prototype.nc_f1 = function () {
    };
    Object.defineProperty(c2.prototype, "nc_prop", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    return c2;
})();
var c3 = (function (_super) {
    __extends(c3, _super);
    function c3() {
        _super.call(this, 10);
    }
    /** c3 f1*/
    c3.prototype.f1 = function () {
    };

    Object.defineProperty(c3.prototype, "prop", {
        /** c3 prop*/
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });

    c3.prototype.nc_f1 = function () {
    };
    Object.defineProperty(c3.prototype, "nc_prop", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    return c3;
})(c2);
var c2_i = new c2(10);
var c3_i = new c3();

// assign
c2_i = c3_i;
var c4 = (function (_super) {
    __extends(c4, _super);
    function c4() {
        _super.apply(this, arguments);
    }
    return c4;
})(c2);
var c4_i = new c4(10);

var i2_i;
var i3_i;

// assign to interface
i2_i = i3_i;


////[commentsInheritance.d.ts]
/** i1 is interface with properties*/
interface i1 {
    /** i1_p1*/
    i1_p1: number;
    /** i1_f1*/
    i1_f1(): void;
    /** i1_l1*/
    i1_l1: () => void;
    i1_nc_p1: number;
    i1_nc_f1(): void;
    i1_nc_l1: () => void;
    p1: number;
    f1(): void;
    l1: () => void;
    nc_p1: number;
    nc_f1(): void;
    nc_l1: () => void;
}
declare class c1 implements i1 {
    public i1_p1: number;
    public i1_f1(): void;
    public i1_l1: () => void;
    public i1_nc_p1: number;
    public i1_nc_f1(): void;
    public i1_nc_l1: () => void;
    /** c1_p1*/
    public p1: number;
    /** c1_f1*/
    public f1(): void;
    /** c1_l1*/
    public l1: () => void;
    /** c1_nc_p1*/
    public nc_p1: number;
    /** c1_nc_f1*/
    public nc_f1(): void;
    /** c1_nc_l1*/
    public nc_l1: () => void;
}
declare var i1_i: i1;
declare var c1_i: c1;
declare class c2 {
    /** c2 c2_p1*/
    public c2_p1: number;
    /** c2 c2_f1*/
    public c2_f1(): void;
    /** c2 c2_prop*/
    public c2_prop : number;
    public c2_nc_p1: number;
    public c2_nc_f1(): void;
    public c2_nc_prop : number;
    /** c2 p1*/
    public p1: number;
    /** c2 f1*/
    public f1(): void;
    /** c2 prop*/
    public prop : number;
    public nc_p1: number;
    public nc_f1(): void;
    public nc_prop : number;
    /** c2 constructor*/
    constructor(a: number);
}
declare class c3 extends c2 {
    constructor();
    /** c3 p1*/
    public p1: number;
    /** c3 f1*/
    public f1(): void;
    /** c3 prop*/
    public prop : number;
    public nc_p1: number;
    public nc_f1(): void;
    public nc_prop : number;
}
declare var c2_i: c2;
declare var c3_i: c3;
declare class c4 extends c2 {
}
declare var c4_i: c4;
interface i2 {
    /** i2_p1*/
    i2_p1: number;
    /** i2_f1*/
    i2_f1(): void;
    /** i2_l1*/
    i2_l1: () => void;
    i2_nc_p1: number;
    i2_nc_f1(): void;
    i2_nc_l1: () => void;
    /** i2 p1*/
    p1: number;
    /** i2 f1*/
    f1(): void;
    /** i2 l1*/
    l1: () => void;
    nc_p1: number;
    nc_f1(): void;
    nc_l1: () => void;
}
interface i3 extends i2 {
    /** i3 p1 */
    p1: number;
    /**
    * i3 f1
    */
    f1(): void;
    /** i3 l1*/
    l1: () => void;
    nc_p1: number;
    nc_f1(): void;
    nc_l1: () => void;
}
declare var i2_i: i2;
declare var i3_i: i3;
