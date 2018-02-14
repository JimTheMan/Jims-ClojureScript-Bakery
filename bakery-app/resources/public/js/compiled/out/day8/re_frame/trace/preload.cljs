(ns day8.re-frame.trace.preload
  (:require [day8.re-frame.trace :as trace]
            [mranderson047.re-frame.v0v10v2.re-frame.core :as rf]))


;; Use this namespace with the :preloads compiler option to perform the necessary setup for enabling tracing:
;; {:compiler {:preloads [day8.re-frame.trace.preload] ...}}
(rf/clear-subscription-cache!)
(trace/init-db!)
(defonce _ (trace/init-tracing!))
(trace/inject-devtools!)
