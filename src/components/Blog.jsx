// src/components/Blog.jsx
import React from "react";
import useInView from "../hooks/useInView";
import CodeDemo from "./CodeDemo";

const ARTICLES = [
  {
    id: 1,
    title: "Building Scalable Spring Boot APIs with PostgreSQL",
    subtitle: "Designing robust REST APIs for high-traffic applications",
    excerpt:
      "Learn how to design and implement scalable REST APIs using Spring Boot, PostgreSQL optimization techniques, and best practices for production-grade backend systems.",
    date: "March 15, 2024",
    readTime: "12 min read",
    tags: ["Spring Boot", "REST API", "PostgreSQL", "Performance"],
    category: "Backend",
    image: "🚀",
    link: "#",
  },
  {
    id: 2,
    title: "React Performance Optimization Techniques",
    subtitle: "Boost your React app's speed and user experience",
    excerpt:
      "A comprehensive guide to optimizing React applications: memoization, lazy loading, code splitting, and profiling tools to identify and fix performance bottlenecks.",
    date: "March 8, 2024",
    readTime: "10 min read",
    tags: ["React", "Performance", "Optimization", "Vite"],
    category: "Frontend",
    image: "⚡",
    link: "#",
  },
  {
    id: 3,
    title: "Full Stack Development: Bridge the Gap",
    subtitle: "Mastering both frontend and backend ecosystems",
    excerpt:
      "Explore the essential skills and tools for full-stack development, integrating Spring Boot backends with modern React frontends, and managing the complete development lifecycle.",
    date: "February 28, 2024",
    readTime: "15 min read",
    tags: ["Full Stack", "Architecture", "Best Practices"],
    category: "Full Stack",
    image: "🌉",
    link: "#",
  },
  {
    id: 4,
    title: "Database Design Patterns for Java Applications",
    subtitle: "Effective schema design and query optimization",
    excerpt:
      "Master database design patterns, normalization techniques, indexing strategies, and query optimization for Java applications using JDBC and Hibernate ORM.",
    date: "February 20, 2024",
    readTime: "14 min read",
    tags: ["PostgreSQL", "Database Design", "JDBC", "Optimization"],
    category: "Database",
    image: "🗄️",
    link: "#",
  },
];

const ArticleCard = ({ article, inView, index }) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "clamp(24px, 4vw, 32px)",
        padding: "24px 24px",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        background:
          "linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(24px)",
        transitionDelay: `${index * 0.1}s`,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent-border)";
        e.currentTarget.style.background =
          "linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-overlay) 100%)";
        e.currentTarget.style.boxShadow = "var(--glow)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background =
          "linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      {/* Image/Icon */}
      <div
        style={{
          minWidth: 100,
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
          background: "var(--accent-muted)",
          borderRadius: "12px",
          flexShrink: 0,
        }}
      >
        {article.image}
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Meta */}
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            marginBottom: 12,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--accent)",
              background: "var(--accent-muted)",
              padding: "4px 10px",
              borderRadius: 20,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {article.category}
          </span>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
            {article.date}
          </span>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>•</span>
          <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>
            {article.readTime}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: 8,
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            marginBottom: 12,
            fontWeight: 500,
          }}
        >
          {article.subtitle}
        </p>

        {/* Excerpt */}
        <p
          style={{
            fontSize: 14,
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginBottom: 16,
            flex: 1,
          }}
        >
          {article.excerpt}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {article.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 12,
                padding: "4px 12px",
                borderRadius: 6,
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 40,
          height: 40,
          borderRadius: 8,
          background: "var(--bg-elevated)",
          color: "var(--accent)",
          transition: "all 0.2s",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        →
      </div>
    </article>
  );
};

const Blog = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, 0.15);

  return (
    <section
      id="blog"
      ref={ref}
      style={{
        background: "var(--bg-base)",
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 48px)",
        position: "relative",
      }}
    >
      <div
        className="section-divider"
        style={{ position: "absolute", top: 0, left: 0 }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            marginBottom: 60,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Learning & Growth
            </span>
            <div
              style={{
                width: 24,
                height: 1,
                background:
                  "linear-gradient(to right, var(--accent), transparent)",
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Articles & Insights
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            Deep-dives on backend development, React optimization, full-stack
            architecture, and lessons learned from building production systems.
          </p>
        </div>

        {/* Articles Grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 3vw, 24px)",
          }}
        >
          {ARTICLES.map((article, i) => (
            <ArticleCard
              key={article.id}
              article={article}
              inView={inView}
              index={i}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 60,
            display: "flex",
            justifyContent: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.8s 0.3s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <button
            style={{
              padding: "clamp(12px, 2vw, 14px) clamp(28px, 4vw, 36px)",
              fontSize: 14,
              fontWeight: 600,
              border: "1px solid var(--accent)",
              borderRadius: 8,
              background: "transparent",
              color: "var(--accent)",
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            View All Articles
          </button>
        </div>

        {/* Code Examples Section */}
        <div
          style={{
            marginTop: 80,
            paddingTop: 60,
            borderTop: "1px solid var(--border)",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all 0.8s 0.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Code Snippets
            </span>
            <div
              style={{
                width: 24,
                height: 1,
                background:
                  "linear-gradient(to right, var(--accent), transparent)",
              }}
            />
          </div>

          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 32,
            }}
          >
            Practical Code Examples
          </h3>

          {/* Spring Boot Example */}
          <CodeDemo
            title="Spring Boot REST Controller"
            language="java"
            description="Example of a clean REST API endpoint with validation and error handling"
            code={`@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    
    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable Long id) {
        return productService.findById(id)
            .map(product -> ResponseEntity.ok(mapToDTO(product)))
            .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(
            @Valid @RequestBody CreateProductRequest request) {
        Product product = productService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(mapToDTO(product));
    }
}`}
          />

          {/* React Hook Example */}
          <CodeDemo
            title="Custom React Hook"
            language="javascript"
            description="Example of a reusable hook for fetching and caching data"
            code={`const useApiData = (url, options = {}) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  
  const cache = React.useRef({});
  
  React.useEffect(() => {
    if (cache.current[url]) {
      setData(cache.current[url]);
      setLoading(false);
      return;
    }
    
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        cache.current[url] = result;
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
};`}
          />

          {/* PostgreSQL Query Example */}
          <CodeDemo
            title="PostgreSQL Query with Optimization"
            language="sql"
            description="Example of an optimized query with proper indexing and aggregation"
            code={`-- Get monthly revenue with product details
SELECT 
    DATE_TRUNC('month', o.created_at) AS month,
    p.category,
    COUNT(DISTINCT o.id) as order_count,
    SUM(o.total_amount) as revenue,
    AVG(o.total_amount) as avg_order_value
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.created_at >= NOW() - INTERVAL '12 months'
    AND o.status = 'completed'
GROUP BY DATE_TRUNC('month', o.created_at), p.category
ORDER BY month DESC, revenue DESC;`}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
