const rewire = require("rewire")
const voo_controler = rewire("./voo-controler")
const VooControler = voo_controler.__get__("VooControler")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "George", "Jean-Philippe"], ["George", "Edmond", "Edmond"], ["Michael", "George", "Anas"]]
        inst = new VooControler(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("formatObjectFligth", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Pierre Edouard", "Edmond"], ["Pierre Edouard", "Michael", "Edmond"], ["Edmond", "George", "Anas"]]
        inst = new VooControler(object)
    })

    test("0", () => {
        let param1 = [["TestUpperCase@Example.com", "email@Google.com", "ponicode.com"], ["user@host:300", "email@Google.com", "TestUpperCase@Example.com"], ["something.example.com", "email@Google.com", "TestUpperCase@Example.com"]]
        let callFunction = () => {
            inst.formatObjectFligth(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["something.example.com", "ponicode.com", "TestUpperCase@Example.com"], ["email@Google.com", "ponicode.com", "TestUpperCase@Example.com"], ["user1+user2@mycompany.com", "bed-free@tutanota.de", "something.example.com"]]
        let callFunction = () => {
            inst.formatObjectFligth(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["user@host:300", "ponicode.com", "bed-free@tutanota.de"], ["ponicode.com", "bed-free@tutanota.de", "TestUpperCase@Example.com"], ["user@host:300", "ponicode.com", "user@host:300"]]
        let callFunction = () => {
            inst.formatObjectFligth(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["TestUpperCase@Example.com", "email@Google.com", "bed-free@tutanota.de"], ["user1+user2@mycompany.com", "TestUpperCase@Example.com", "something.example.com"], ["bed-free@tutanota.de", "user@host:300", "user1+user2@mycompany.com"]]
        let callFunction = () => {
            inst.formatObjectFligth(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["user1+user2@mycompany.com", "user1+user2@mycompany.com", "TestUpperCase@Example.com"], ["user1+user2@mycompany.com", "something@example.com", "user@host:300"], ["something@example.com", "user@host:300", "something@example.com"]]
        let callFunction = () => {
            inst.formatObjectFligth(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.formatObjectFligth(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getFiltredList", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Pierre Edouard", "Anas"], ["Pierre Edouard", "Jean-Philippe", "George"], ["Anas", "Pierre Edouard", "Jean-Philippe"]]
        inst = new VooControler(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getFiltredList("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.getFiltredList("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.getFiltredList("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.getFiltredList("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.getFiltredList(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("shouldComponentUpdate", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Michael", "Jean-Philippe"], ["Anas", "Michael", "George"], ["Edmond", "Jean-Philippe", "George"]]
        inst = new VooControler(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.shouldComponentUpdate()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleChangeGo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "George", "Jean-Philippe"], ["George", "Anas", "Edmond"], ["Michael", "George", "Jean-Philippe"]]
        inst = new VooControler(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChangeGo({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChangeGo({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChangeGo({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChangeGo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleChangeArrived", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Edmond", "Michael"], ["Pierre Edouard", "Anas", "Edmond"], ["Michael", "Jean-Philippe", "Jean-Philippe"]]
        inst = new VooControler(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChangeArrived({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChangeArrived({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChangeArrived({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChangeArrived(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleChangeDate", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Pierre Edouard"], ["Michael", "Michael", "Pierre Edouard"], ["Edmond", "Pierre Edouard", "Anas"]]
        inst = new VooControler(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChangeDate({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChangeDate({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChangeDate({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChangeDate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Edmond", "Anas"], ["Pierre Edouard", "Anas", "George"], ["Anas", "Jean-Philippe", "Anas"]]
        inst = new VooControler(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.onClick({ preventDefault: () => true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onClick({ preventDefault: () => false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onClick(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getVoos", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Jean-Philippe", "Pierre Edouard"], ["Pierre Edouard", "Michael", "Jean-Philippe"], ["Pierre Edouard", "George", "Edmond"]]
        inst = new VooControler(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getVoos()
        }
    
        expect(callFunction).not.toThrow()
    })
})
