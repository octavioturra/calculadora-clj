(ns calculadora.core
  (:gen-class))

(defn radixquadratum [x] (Math/sqrt x))

(defn power [x, y]
  (reduce * (repeat n x)))

(defn log [x] (Math/log x))

(defn handler [request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body "Hello World"})

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))
