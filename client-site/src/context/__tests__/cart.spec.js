import { CartProvider, useCart } from "../cart";
import { renderHook, act } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";

beforeEach(() => {
  localStorage.clear();
});

describe("useCart", () => {
  const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

  it("should be defined", () => {
    expect(useCart).toBeDefined();
  });

  it("should return an object", () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(typeof result.current).toBe("object");
  });

  describe("cart", () => {
    it("should be defined", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.cart).toBeDefined();
    });

    it("should be an array", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(Array.isArray(result.current.cart)).toBe(true);
    });

    it("should be empty by default", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.cart).toHaveLength(0);
    });
  });

  describe("addProduct", () => {
    it("should be defined", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.addProduct).toBeDefined();
    });

    it("should be a function", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(typeof result.current.addProduct).toBe("function");
    });

    it("should add a product to the cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
      });
      expect(result.current.cart).toHaveLength(1);
    });

    it("should add a product with the correct properties", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
      });
      expect(result.current.cart[0]).toEqual({
        id: "1",
        name: "Test Product",
        quantity: 1,
      });
    });

    it("should increase the quantity of a product if it already exists in the cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.addProduct({ id: "1", name: "Test Product" });
      });
      expect(result.current.cart[0].quantity).toBe(2);
    });

    it('should save the cart to localStorage with the "neptuneCart" key', () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
      });
      expect(localStorage.getItem("neptuneCart")).toBe(
        JSON.stringify([{ id: "1", name: "Test Product", quantity: 1 }])
      );
    });
  });

  describe("decreaseProductQuantity", () => {
    it("should be defined", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.decreaseProductQuantity).toBeDefined();
    });

    it("should be a function", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(typeof result.current.decreaseProductQuantity).toBe("function");
    });

    it("should decrease the quantity of a product if it exists in the cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.decreaseProductQuantity({ id: "1", name: "Test Product" });
      });
      expect(result.current.cart[0].quantity).toBe(1);
    });

    it("should remove the product from the cart if the quantity is 0", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.decreaseProductQuantity({ id: "1", name: "Test Product" });
      });
      expect(result.current.cart).toHaveLength(0);
    });

    it("should not decrease the quantity of a product if it does not exist in the cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.decreaseProductQuantity({ id: "1", name: "Test Product" });
      });
      expect(result.current.cart).toHaveLength(0);
    });

    it('should save the cart to localStorage with the "neptuneCart" key', () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.decreaseProductQuantity({ id: "1", name: "Test Product" });
      });
      expect(localStorage.getItem("neptuneCart")).toBe("[]");
    });
  });

  describe("increaseProductQuantity", () => {
    it("should be defined", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.increaseProductQuantity).toBeDefined();
    });

    it("should be a function", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(typeof result.current.increaseProductQuantity).toBe("function");
    });

    it("should increase the quantity of a product if it exists in the cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.increaseProductQuantity({ id: "1", name: "Test Product" });
      });
      expect(result.current.cart[0].quantity).toBe(2);
    });

    it("should not increase the quantity of a product if it does not exist in the cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.increaseProductQuantity({ id: "1", name: "Test Product" });
      });
      expect(result.current.cart).toHaveLength(0);
    });

    it('should save the cart to localStorage with the "neptuneCart" key', () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.increaseProductQuantity({ id: "1", name: "Test Product" });
      });
      expect(localStorage.getItem("neptuneCart")).toBe(
        JSON.stringify([{ id: "1", name: "Test Product", quantity: 2 }])
      );
    });
  });

  describe("removeProduct", () => {
    it("should be defined", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.removeProduct).toBeDefined();
    });

    it("should be a function", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(typeof result.current.removeProduct).toBe("function");
    });

    it("should remove a product from the cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.removeProduct({ id: "1", name: "Test Product" });
      });
      expect(result.current.cart).toHaveLength(0);
    });

    it("should save the cart to localStorage when a product is removed", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.removeProduct({ id: "1", name: "Test Product" });
      });
      expect(localStorage.getItem("neptuneCart")).toBe("[]");
    });
  });

  describe("clearCart", () => {
    it("should be defined", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.clearCart).toBeDefined();
    });

    it("should be a function", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(typeof result.current.clearCart).toBe("function");
    });

    it("should clear the cart", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.clearCart();
      });
      expect(result.current.cart).toHaveLength(0);
    });

    it("should clear the cart even if it has multiple products", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.addProduct({ id: "2", name: "Test Product 2" });
        result.current.clearCart();
      });
      expect(result.current.cart).toHaveLength(0);
    });

    it("should clear the cart even if it has multiple products with the same id", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.clearCart();
      });
      expect(result.current.cart).toHaveLength(0);
    });

    it("should save the cart to localStorage when the cart is cleared", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "Test Product" });
        result.current.clearCart();
      });
      expect(localStorage.getItem("neptuneCart")).toBe("[]");
    });
  });

  describe("isEmpty", () => {
    it("should be defined", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.isEmpty).toBeDefined();
    });

    it("should be a function", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(typeof result.current.isEmpty).toBe("function");
    });

    it("should return true if the cart is empty", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      expect(result.current.isEmpty()).toBe(true);
    });

    it("should return false if the cart is not empty", () => {
      const { result } = renderHook(() => useCart(), { wrapper });
      act(() => {
        result.current.addProduct({ id: "1", name: "test", price: 1000 });
      });
      expect(result.current.isEmpty()).toBe(false);
    });
  });

  describe("CartProvider", () => {
    it("should be defined", () => {
      expect(CartProvider).toBeDefined();
    });

    it("should be a function", () => {
      expect(typeof CartProvider).toBe("function");
    });
  });
});
