(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{167:function(e,s,t){e.exports=t.p+"assets/img/figure33.53f8c16d.png"},168:function(e,s,t){e.exports=t.p+"assets/img/figure34.703debf1.png"},169:function(e,s,t){e.exports=t.p+"assets/img/figure35.186844d5.png"},170:function(e,s,t){e.exports=t.p+"assets/img/figure36.da3b1935.png"},171:function(e,s,t){e.exports=t.p+"assets/img/figure37.7760f9bc.png"},299:function(e,s,t){"use strict";t.r(s);var a=t(28),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"validate-hpe-ezmeral-container-platform-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate-hpe-ezmeral-container-platform-deployment"}},[e._v("#")]),e._v(" Validate HPE Ezmeral Container Platform deployment")]),e._v(" "),a("p",[e._v("This section deploys a sample application to validate the deployment of HPE Ezmeral Container Platform.")]),e._v(" "),a("h2",{attrs:{id:"deploying-wordpress-application-with-hpe-ezmeral-data-fabric"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-wordpress-application-with-hpe-ezmeral-data-fabric"}},[e._v("#")]),e._v(" Deploying WordPress application with HPE Ezmeral Data Fabric")]),e._v(" "),a("p",[e._v("The following example is based on "),a("strong",[e._v("WordPress and MySQL with Persistent Volume")]),e._v(" sample scenario described in "),a("a",{attrs:{href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubernetes.io."),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("MySQL and WordPress require a Persistent Volume to store data. Their persistent volume claim will be created at the deployment step. HPE Ezmeral Container Platform setup uses MapR as the default persistent volume.")]),e._v(" "),a("p",[e._v("Add a secret generator in kustomization.yaml from the following command. You will need to replace YOUR_PASSWORD with the password you want to use.")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" wordpress\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" wordpress\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("./kustomization.yaml\nsecretGenerator:\n- name: mysql-pass\nliterals:\n- "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("YOUR_PASSWORD\nEOF\n")])])])]),e._v(" "),a("p",[e._v("Download these two yaml manifest files for MySQL and WordPress services respectively:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://kubernetes.io/examples/application/wordpress/mysql-deployment.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/examples/application/wordpress/mysql-deployment.yaml"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://kubernetes.io/examples/application/wordpress/wordpress-deployment.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes.io/examples/application/wordpress/wordpress-deployment.yaml"),a("OutboundLink")],1)])])]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -kO https://kubernetes.io/examples/application/wordpress/mysql-deployment.yaml\n% Total % Received % Xferd Average Speed Time Time Time Current\nDload Upload Total Spent Left Speed\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1238")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1238")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1430")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" --:--:-- --:--:-- --:--:-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1429")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -kO https://kubernetes.io/examples/application/wordpress/wordpress-deployment.yaml\n% Total % Received % Xferd Average Speed Time Time Time Current\nDload Upload Total Spent Left Speed\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1323")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1323")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1441")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" --:--:-- --:--:-- --:--:-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1441")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -al\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v("\ndrwxr-xr-x "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" leedavid UsersGrp "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(":50 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\ndrwx------ "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" leedavid UsersGrp "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(":46 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" leedavid UsersGrp "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("137")]),e._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(":49 kustomization.yaml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" leedavid UsersGrp "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1238")]),e._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(":47 mysql-deployment.yaml\n-rw-r--r-- "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" leedavid UsersGrp "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1323")]),e._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(":50 wordpress-deployment.yaml\n")])])])]),e._v(" "),a("h3",{attrs:{id:"persistent-storage-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#persistent-storage-configuration"}},[e._v("#")]),e._v(" Persistent Storage configuration")]),e._v(" "),a("p",[e._v("If you have installed HPE Ezmeral Container Platform with tenant storage, then HPE Ezmeral Container Platform will already have registered MapR as the default Storage Class in this namespace.")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl get StorageClass\nNAME PROVISIONER AGE\ndefault "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" com.mapr.csi-kdf 39h\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl describe StorageClass\nName: default\nIsDefaultClass: Yes\nAnnotations: storageclass.kubernetes.io/is-default-class"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\nProvisioner: com.mapr.csi-kdf\nParameters: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("cldbHosts")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16.143")]),e._v(".20.131:7222,cluster"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("epic.mapr.cluster,csi.storage.k8s.io/provisioner-secret-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mapr-user-secret,csi.s torage.k8s.io/provisioner-secret-namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mapr-csi,csiNodePublishSecretName"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mapr-ticket-secret,csiNodePublishSecretNamespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("mapr-csi,mountPre "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("fix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/mapr-csi,namePrefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("k8s-1-,platinum"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true,restServers"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("16.143")]),e._v(".20.131:8443,securityType"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("secure\nAllowVolumeExpansion: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("unset"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nMountOptions: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nReclaimPolicy: Delete\nVolumeBindingMode: Immediate\nEvents: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("p",[e._v("In these 2 manifest files, both WordPress service and MySQL are requesting for persistent volume (PV):")]),e._v(" "),a("h3",{attrs:{id:"mysql-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-deployment"}},[e._v("#")]),e._v(" MySQL deployment")]),e._v(" "),a("p",[a("img",{attrs:{src:t(167),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"wordpress-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wordpress-deployment"}},[e._v("#")]),e._v(" WordPress Deployment")]),e._v(" "),a("p",[a("img",{attrs:{src:t(168),alt:""}})]),e._v(" "),a("p",[e._v("In both pods, there is no explicit request for specific storageClassName. Hence, it will use the default StorageClass, that is MapR storage.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(169),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"nodeport-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodeport-service"}},[e._v("#")]),e._v(" NodePort Service")]),e._v(" "),a("p",[e._v("Edit wordpress manifest yaml to use NodePort service instead of load balancer service.")]),e._v(" "),a("p",[e._v("This is needed so that HPE Ezmeral Container Platform will do port remap.")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("vi")]),e._v(" wordpress-deployment.yaml\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" wordpress-deployment.yaml\napiVersion: v1\nkind: Service\nmetadata:\nname: wordpress\nlabels:\napp: wordpress\nspec:\nports:\n- port: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\nselector:\napp: wordpress\ntier: frontend\ntype: NodePort\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\nname: wp-pv-claim\nlabels:\napp: wordpress\nspec:\naccessModes:\n- ReadWriteOnce\nresources:\nrequests:\nstorage: 20Gi\n---\napiVersion: apps/v1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# for versions before 1.9.0 use apps/v1beta2")]),e._v("\nkind: Deployment\nmetadata:\nname: wordpress\nlabels:\napp: wordpress\nspec:\nselector:\nmatchLabels:\napp: wordpress\ntier: frontend\nstrategy:\ntype: Recreate\ntemplate:\nmetadata:\nlabels:\napp: wordpress\ntier: frontend\nspec:\ncontainers:\n- image: wordpress:4.8-apache\nname: wordpress\nenv:\n- name: WORDPRESS_DB_HOST\nvalue: wordpress-mysql\n- name: WORDPRESS_DB_PASSWORD\nvalueFrom:\nsecretKeyRef:\nname: mysql-pass\nkey: password\nports:\n- containerPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\nname: wordpress\nvolumeMounts:\n- name: wordpress-persistent-storage\nmountPath: /var/www/html\nvolumes:\n- name: wordpress-persistent-storage\npersistentVolumeClaim:\nclaimName: wp-pv-claim\n")])])])]),e._v(" "),a("h3",{attrs:{id:"deploy-the-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-services"}},[e._v("#")]),e._v(" Deploy the services")]),e._v(" "),a("p",[e._v("Add these two deployment manifests to kustomization.yaml file.")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v("./kustomization.yaml\nresources:\n- mysql-deployment.yaml\n- wordpress-deployment.yaml\nEOF\n")])])])]),e._v(" "),a("p",[e._v("The kustomization.yaml contains all the resources for deploying a WordPress site and a MySQL database. You can apply the directory and verify MapR volume and all the services:")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl apply --kustomize ./\nsecret/mysql-pass-9tt65k5fgm created\nservice/wordpress-mysql created\nservice/wordpress created\ndeployment.apps/wordpress-mysql created\ndeployment.apps/wordpress created\npersistentvolumeclaim/mysql-pv-claim created\npersistentvolumeclaim/wp-pv-claim created\n")])])])]),e._v(" "),a("p",[e._v("Confirm PVC is using MapR StorageClass.")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl get pvc\nNAME STATUS VOLUME CAPACITY ACCESS MODES STORAGECLASS AGE\nmysql-pv-claim Bound mapr-pv-16f97a33-b8dd-488a-b6db-1d94a84286e2 20Gi RWO default 48s\nwp-pv-claim Bound mapr-pv-896b3504-e9ba-4593-b9a0-88a9ece392b5 20Gi RWO default 48s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("pv")]),e._v("\nNAME CAPACITY ACCESS MODES RECLAIM POLICY STATUS CLAIM STORAGECLASS REASON AGE\nmapr-pv-32850109-ef66-42db-9522-b563fbc01eae 10Gi RWO Delete Bound bdwebterm/p-kdss-977sb-0 default 41h\nmapr-pv-a24b1733-39db-40d2-bdaf-0be7c22ed83b 10Gi RWO Delete Bound bdwebterm/p-kdss-nbwhn-0 default 31h\nmapr-pv-dbf96aed-dafd-47b7-87d4-7d343f182d8b 20Gi RWO Delete Bound default/mysql-pv-claim default 69s\nmapr-pv-e3c1db71-2865-425c-971e-c01466e9d295 20Gi RWO Delete Bound default/wp-pv-claim default 69s\nmapr-pv-ed5f1be3-9be2-4470-83cf-67f9b31e9dbf 10Gi RWO Delete Bound bdwebterm/p-kdss-dl26j-0 default 32h\n")])])])]),e._v(" "),a("p",[e._v('Label the WordPress service so that it will be exposed via HPE Container Platform Gateway. Note that this step is NOT necessary if the service was created in the namespace of a tenant that has "Map Services To Gateway" enabled.')]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl get services\nNAME TYPE CLUSTER-IP EXTERNAL-IP PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" AGE\nkubernetes ClusterIP "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.96")]),e._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v("/TCP 26h\nwordpress NodePort "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.96")]),e._v(".98.248 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v(":30996/TCP 24s\nwordpress-mysql ClusterIP None "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3306")]),e._v("/TCP 24s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl label svc wordpress hpecp.hpe.com/hpecp-internal-gateway"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\nservice/wordpress labeled\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl describe "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" wordpress\nName: wordpress\nNamespace: default\nLabels: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("wordpress\nhpecp.hpe.com/hpecp-internal-gateway"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\nAnnotations: hpecp-internal-gateway/80: mip-bd-vm38.mip.storage.hpecorp.net:10006\nSelector: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("wordpress,tier"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("frontend\nType: NodePort\nIP: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.96")]),e._v(".98.248\nPort: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("unset"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/TCP\nTargetPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/TCP\nNodePort: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("unset"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("30996")]),e._v("/TCP\nEndpoints: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.244")]),e._v(".2.11:80\nSession Affinity: None\nExternal Traffic Policy: Cluster\nEvents:\nType Reason Age From Message\n---- ------ ---- ---- -------\nNormal Service 26s kubedirector Created HPECP K8S "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v("\n")])])])]),e._v(" "),a("p",[e._v("Copy the IP address and Port number to your browser. You should see set up page similar to the following screenshot. Figure 33 depicts the WordPress welcome page.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(170),alt:"WordPress welcome page "}})]),e._v(" "),a("p",[a("strong",[e._v("Figure")]),e._v(" "),a("strong",[e._v("36.")]),e._v(" WordPress welcome page")]),e._v(" "),a("p",[e._v("Destroy the application deployments (Example: pods) and restart the deployments. Validate the WordPress application information.")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl delete deployment wordpress\ndeployment.extensions "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wordpress"')]),e._v(" deleted\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl delete deployment wordpress-mysql\ndeployment.extensions "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wordpress-mysql"')]),e._v(" deleted\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl get pods\nNo resources found.\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl get deployments\nNo resources found.\n")])])])]),e._v(" "),a("p",[e._v("Reapply the same deployment and reconnect to persistent storage.")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl apply -k ./\nsecret/mysql-pass-9tt65k5fgm unchanged\nservice/wordpress-mysql unchanged\nservice/wordpress unchanged\ndeployment.apps/wordpress-mysql created\ndeployment.apps/wordpress created\npersistentvolumeclaim/mysql-pv-claim unchanged\npersistentvolumeclaim/wp-pv-claim unchanged\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl get pods\nNAME READY STATUS RESTARTS AGE\nwordpress-594759d7f6-jdnvp "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1 Running "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" 27s\nwordpress-mysql-847b7b996d-dwf6s "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/1 Running "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" 28s\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl describe "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" wordpress\nName: wordpress\nNamespace: default\nLabels: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("wordpress\nHpecp.hpe.com/hpecp-internal-gateway"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\nAnnotations: hpecp-internal-gateway/80: mip-bd-vm38.mip.storage.hpecorp.net:10006\nSelector: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("wordpress,tier"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("frontend\nType: NodePort\nIP: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.96")]),e._v(".35.129\nPort: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("unset"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/TCP\nTargetPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("/TCP\nNodePort: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("unset"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("31589")]),e._v("/TCP\nEndpoints: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10.244")]),e._v(".1.18:80\nSession Affinity: None\nExternal Traffic Policy: Cluster\nEvents:\nType Reason Age From Message\n---- ------ ---- ---- -------\nNormal Service 12m kubedirector Created HPECP K8S "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v("\n")])])])]),e._v(" "),a("p",[e._v("WordPress service is restored.")]),e._v(" "),a("p",[e._v("Figure 34 depicts the restoration of WordPress service.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(171),alt:"WordPress restoration service"}})]),e._v(" "),a("p",[a("strong",[e._v("Figure")]),e._v(" "),a("strong",[e._v("37.")]),e._v(" WordPress restoration service")]),e._v(" "),a("h3",{attrs:{id:"cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),a("p",[e._v("To free up all the resources (including persistent storage), you will need to delete the whole deployment.")]),e._v(" "),a("blockquote",[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kubectl delete -k ./\nsecret "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mysql-pass-9tt65k5fgm"')]),e._v(" deleted\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wordpress-mysql"')]),e._v(" deleted\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wordpress"')]),e._v(" deleted\ndeployment.apps "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wordpress-mysql"')]),e._v(" deleted\ndeployment.apps "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wordpress"')]),e._v(" deleted\npersistentvolumeclaim "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mysql-pv-claim"')]),e._v(" deleted\npersistentvolumeclaim "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wp-pv-claim"')]),e._v(" deleted\n")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);