#!/bin/bash
cd /home/kavia/workspace/code-generation/bmi-reactify-70053-c35d6cff/frontend_bmi_calculator_workspace/frontend_bmi_calculator
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

