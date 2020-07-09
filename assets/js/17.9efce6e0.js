(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{293:function(t,e,s){"use strict";s.r(e);var n=s(28),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hpe-csi-driver-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hpe-csi-driver-installation"}},[t._v("#")]),t._v(" HPE CSI driver installation")]),t._v(" "),s("p",[t._v("HPE CSI driver is installed as part of the HPE Ezmeral Container Platform K8s cluster installation.")]),t._v(" "),s("h2",{attrs:{id:"validating-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validating-installation"}},[t._v("#")]),t._v(" Validating installation")]),t._v(" "),s("p",[t._v("Verify that everything is up and running correctly with the listing out the pods, using the below command. The expected output is as shown.")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kubectl get pods --all-namespaces -l "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app in (nimble-csp, primera3par-csp, hpe-csi-node, hpe-csi-controller)'")]),t._v("\nNAMESPACE NAME READY STATUS RESTARTS AGE\nkube-system csp-service-5df8679cf7-m4jcw "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/1 Running "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 5m\nkube-system hpe-csi-controller-84d8569476-9pk74 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("/5 Running "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 5m\nkube-system hpe-csi-node-qt74m "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/2 Running "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 5m\n")])])])]),t._v(" "),s("p",[t._v("If all the components show in Running state, then the HPE CSI driver for Kubernetes and the corresponding Container Storage Provider has been successfully deployed.")])])}),[],!1,null,null,null);e.default=a.exports}}]);