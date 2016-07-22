#!/bin/bash
LOCALNODE=$(which node);
LOCALNODE=${LOCALNODE//bin\/node/bin};
while read preCommit;
do echo ${preCommit//<%NODEPATH%>/$LOCALNODE};
done < ./githooks/pre-commit-tmpl.sh > ./githooks/pre-commit.sh;
exit $?
