```javascript
// Buggy component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: The callback function inside useEffect always returns the same value regardless of count changes.
    const intervalId = setInterval(() => {
      setCount(count + 1); // This will not trigger a re-render immediately because of the stale closure.
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```