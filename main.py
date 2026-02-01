def fibonacci(n: int) -> int:
    """Calculate the nth Fibonacci number using iterative approach.

    Args:
        n: The position in the Fibonacci sequence (must be non-negative integer)

    Returns:
        The nth Fibonacci number

    Raises:
        TypeError: If n is not an integer
        ValueError: If n is negative

    Time Complexity: O(n)
    Space Complexity: O(1)

    Example:
        >>> fibonacci(0)
        0
        >>> fibonacci(1)
        1
        >>> fibonacci(10)
        55
    """
    if not isinstance(n, int):
        raise TypeError(f"n must be an integer, got {type(n).__name__}")

    if n < 0:
        raise ValueError(f"n must be non-negative, got {n}")

    if n <= 0:
        return 0
    elif n == 1:
        return 1

    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b


if __name__ == "__main__":
    n = 10
    result = fibonacci(n)
    print(f"fibonacci({n}) = {result}")
