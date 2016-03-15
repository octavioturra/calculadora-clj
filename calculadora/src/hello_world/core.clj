(ns hello-world.core
  (:require [ring.middleware.json :refer :all]
            [ring.util.response :refer [response]]))

(defn root [x, y]
  (Math/pow x (/ 1 y)))

(defn power [x, y]
  (Math/pow x y))

(defn log [x, y]
  (Math/log x))


(defn getAction[action]
  (case action
    "radix" root
    "power" power
    "log" log))

(defn handler [request]
  (response {:answer
      ((getAction (get-in request [:body "action"]))
       (get-in request [:body "x"])
       (get-in request [:body "y"]))
    }))


(def app
  (-> handler
   wrap-json-response
   wrap-json-body
   ))
