document.addEventListener('DOMContentLoaded', function() {
    // 계산기 페이지가 아닐 경우 실행 중단
    if (!document.getElementById('calculator')) {
        return;
    }

    // Banished 자원과 그 가치 (장작 기준, 장작 가치 = 4)
    // 출처에 따라 가치가 다를 수 있으므로 일반적인 값을 기준으로 함
    const resources = {
        "장작 (Firewood)": 4,
        "통나무 (Log)": 2,
        "석재 (Stone)": 2,
        "철 (Iron)": 3,
        "석탄 (Coal)": 3,
        "사슴고기 (Venison)": 3,
        "가죽 (Leather)": 10,
        "양모 (Wool)": 10,
        "소고기 (Beef)": 10,
        "따뜻한 외투 (Warm Coat)": 20,
        "강철 도구 (Steel Tools)": 12
    };

    const resourceSelect = document.getElementById('resource-select');
    const quantityInput = document.getElementById('quantity-input');
    const totalValueSpan = document.getElementById('total-value');
    const calculateBtn = document.getElementById('calculate-btn');

    // 자원 선택 <select> 옵션 채우기
    for (const resourceName in resources) {
        const option = document.createElement('option');
        option.value = resourceName;
        option.textContent = `${resourceName} (가치: ${resources[resourceName]})`;
        resourceSelect.appendChild(option);
    }

    // 가치 계산 함수
    function calculateValue() {
        const selectedResource = resourceSelect.value;
        const quantity = parseInt(quantityInput.value, 10);
        const resourceValue = resources[selectedResource];
        const firewoodValue = resources["장작 (Firewood)"]; // 장작의 가치

        if (!isNaN(quantity) && resourceValue && firewoodValue > 0) {
            const totalValue = quantity * resourceValue;
            const firewoodEquivalent = totalValue / firewoodValue;
            totalValueSpan.textContent = firewoodEquivalent.toFixed(2); // 소수점 둘째 자리까지 표시
        }
    }

    // 이벤트 리스너 등록
    calculateBtn.addEventListener('click', calculateValue);

    // 초기 값 계산
    calculateValue();
});