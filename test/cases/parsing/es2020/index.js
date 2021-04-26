import { a } from "./module";

class Class {
	#field = this instanceof Class ? a : false;
	field = this instanceof Class ? a : false;
	#method = () => (this instanceof Class ? a : false);
	method = () => (this instanceof Class ? a : false);
	[`key${!this ? a : false}`] = this instanceof Class ? a : false;

	static #sfield = this.name === "Class" ? a : false;
	static sfield = this.name === "Class" ? a : false;
	static #smethod = () => (this.name === "Class" ? a : false);
	static smethod = () => (this.name === "Class" ? a : false);
	static [`skey${!this ? a : false}`] = this.name === "Class" ? a : false;

	test() {
		expect(this.#field).toBe(42);
		expect(this.field).toBe(42);
		expect(this.#method()).toBe(42);
		expect(this.method()).toBe(42);
		expect(this.key42).toBe(42);
	}

	static stest() {
		expect(Class.#sfield).toBe(42);
		expect(Class.sfield).toBe(42);
		expect(Class.#smethod()).toBe(42);
		expect(Class.smethod()).toBe(42);
		expect(Class.skey42).toBe(42);
	}
}

it("should support class fields", () => {
	Class.stest();
	new Class().test();
});
