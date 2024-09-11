# 🖼️ Image Ratio Padder

사용자가 이미지, 이미지 비율, 배경 색상을 선택하면 **원본 크기를 유지**하면서 입력된 비율에 맞게 나머지 부분을 지정한 색상으로 채워주는 웹 애플리케이션입니다.

## 🎯 프로젝트 동기

이 프로젝트는 velog에 글을 작성할 때 발생하는 **thumbnail 이미지 잘림 문제**를 해결하기 위해 시작되었습니다. velog의 thumbnail 이미지 비율(1.91:1)에 맞지 않는 이미지를 업로드하면 이미지가 확대되며 강제로 잘리게 됩니다. 이 문제를 해결할 수 있는 웹 애플리케이션을 찾지 못해 직접 만들었으며, 기존에는 [vanilla JavaScript, HTML, CSS로 구현](https://github.com/do0ori/image-ratio-padder-vanilla)했으나 **코드 유지보수성**과 **사용자 경험**(UX)을 개선하기 위해 React로 재구현하게 되었습니다.

## ✨ 주요 기능

1. **이미지 업로드**

    - **드래그 앤 드롭** 또는 클릭하여 이미지를 업로드할 수 있습니다.
    - 업로드된 이미지는 **실시간**으로 선택한 비율 및 배경색에 맞춰 **미리보기**가 가능합니다.

2. **다양한 이미지 비율 선택**

    - 다양한 **이미지 비율**을 선택할 수 있습니다.
    - 사용자 정의 비율 입력도 지원하며, 실시간으로 **입력 값 검증**이 이루어집니다.
      (버튼 및 입력 필드는 사용자의 입력에 따라 동적으로 활성화 또는 비활성화되어 **잘못된 상태**를 방지합니다.)

3. **배경 색상 선택**

    - 사용자가 원하는 **배경 색상**을 선택할 수 있습니다.
    - 선택한 배경색은 미리보기 화면에 실시간으로 반영됩니다.

4. **실시간 이미지 미리보기**
    - 선택한 비율과 배경색을 **실시간으로 미리보기**하여 보여줍니다.
    - 이미지가 즉시 처리되지 않고, **다운로드 버튼**을 클릭할 때 이미지가 최종 처리되어 다운로드됩니다.
    - 이미지가 없을 경우 경고 메시지와 아이콘이 표시되어 사용자가 이미지를 업로드해야 함을 직관적으로 알 수 있습니다.

## 🚀 Vanilla JS 버전 대비 개선 사항

-   **모듈화**
    -   재사용 가능한 컴포넌트로 기능 분리, 코드 가독성 및 유지보수성을 개선했습니다.
-   **향상된 사용자 경험**
    -   React의 컴포넌트 기반 아키텍처를 활용해 UI가 보다 **빠르고 유연하게 업데이트**되었습니다.
-   **빠른 미리보기 및 지연된 이미지 처리**
    -   미리보기를 CSS를 사용하여 빠르게 렌더링하고, 실제 이미지 처리 작업(크기 조정 및 패딩 적용)은 다운로드 시에만 진행되어 **최적의 성능**을 보장합니다.
-   **새로 추가된 기능**
    -   **드래그 앤 드롭 이미지 업로드**
        -   이전 버전에서는 클릭을 통한 파일 선택만 가능했으나, 이제 드래그 앤 드롭을 통해 이미지를 업로드할 수 있습니다.
        -   클릭 후 파일 탐색기의 파일 이름 필드에 이미지 URL을 입력하여 업로드도 가능합니다.
    -   **드롭다운 이미지 비율 선택**
        -   드롭다운 메뉴에서 사전 정의된 비율을 선택하거나 사용자 정의 비율을 입력할 수 있습니다.
        -   사용자 정의 비율 입력 시 실시간 값 검증을 통해 잘못된 상태를 방지합니다.

## 🛠️ 사용법

👉 https://do0ori.github.io/image-ratio-padder/

[![Image Ratio Padder Example](https://github.com/user-attachments/assets/e43b0815-ee3c-4cc1-af64-87cd1f0835d1)](https://do0ori.github.io/image-ratio-padder/)

1. 클릭하여 이미지를 선택하거나 드래그 앤 드롭하여 이미지를 업로드합니다.
2. 원하는 이미지 비율을 선택하거나, 직접 입력합니다.
3. 배경색을 선택하여 이미지를 채웁니다.
4. 다운로드 버튼을 클릭해 처리된 이미지를 다운로드합니다.

## 💻 기술 스택

<p>
    <img src="https://img.shields.io/badge/Typescript-2d79c7?style=for-the-badge&logo=Typescript&logoColor=white">
    <img src="https://img.shields.io/badge/Create React App-282c35?style=for-the-badge&logo=createreactapp&logoColor=09D3AC">
    <img src="https://img.shields.io/badge/Tailwind CSS-131729?style=for-the-badge&logo=Tailwind CSS&logoColor=78baf2">
</p>

## 🤝 기여

기여를 원하시면 먼저 이 저장소를 [**포크**(fork)](https://github.com/do0ori/image-ratio-padder/fork)하고, 새로운 브랜치를 생성한 후 PR을 제출해주세요. 버그 발견, 새로운 기능 제안 등의 기여는 [**이슈**(Issues)](https://github.com/do0ori/image-ratio-padder/issues)를 작성해주세요. 모든 형태의 기여를 환영합니다!
