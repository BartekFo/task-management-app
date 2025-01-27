# **Dokumentacja kluczowych decyzji projektowych i napotkanych wyzwań**

## **1. Wprowadzenie**
Celem projektu było stworzenie lekkiej, responsywnej aplikacji typu "To-Do", która umożliwia użytkownikom zarządzanie zadaniami w prosty i intuicyjny sposób. W projekcie zdecydowano się na wykorzystanie frameworka **Svelte** oraz **local storage** jako mechanizmu przechowywania danych. Poniżej przedstawiono kluczowe decyzje projektowe oraz wyzwania, które napotkano podczas realizacji projektu.

---

## **2. Kluczowe decyzje projektowe**

### **2.1. Wybór frameworka: Svelte**
#### **Decyzja:**
Zdecydowano się na wykorzystanie **Svelte** jako frameworka do budowy aplikacji frontendowej.

#### **Uzasadnienie:**
- **Lekkość i wydajność:** Svelte generuje czysty kod JavaScript, co eliminuje potrzebę korzystania z wirtualnego DOM i zapewnia lepszą wydajność w porównaniu do innych frameworków, takich jak React czy Vue.
- **Prostota składni:** Svelte oferuje prostą i intuicyjną składnię, co przyspieszyło proces tworzenia aplikacji.
- **Rozmiar aplikacji:** Dzięki Svelte aplikacja jest lekka, co jest istotne w przypadku aplikacji działających w przeglądarce.
- **Nowoczesne podejście:** Svelte pozwala na łatwe zarządzanie stanem aplikacji bez potrzeby korzystania z dodatkowych bibliotek.

---

### **2.2. Przechowywanie danych: local storage**
#### **Decyzja:**
Zdecydowano się na wykorzystanie **local storage** jako mechanizmu przechowywania danych użytkownika.

#### **Uzasadnienie:**
- **Brak potrzeby backendu:** Aplikacja miała być w pełni frontendowa, a local storage pozwala na przechowywanie danych bez konieczności tworzenia serwera.
- **Prostota implementacji:** Local storage jest łatwy w użyciu i pozwala na szybkie zapisywanie oraz odczytywanie danych w formacie JSON.
- **Dostępność offline:** Dzięki local storage użytkownicy mogą korzystać z aplikacji nawet bez dostępu do internetu.
- **Wydajność:** Local storage jest szybki i wystarczający dla aplikacji o niewielkiej ilości danych, takich jak lista zadań.

---

### **2.3. Kluczowe funkcjonalności aplikacji**
#### **Decyzja:**
Zaprojektowano aplikację z następującymi kluczowymi funkcjonalnościami:
1. **Dodawanie zadań:** Użytkownicy mogą dodawać nowe zadania z opcjonalnym terminem realizacji.
2. **usuwanie zadań:** Możliwość usuwania zadań.
3. **Sortowanie zadań:** Zadania są sortowane według daty dodania.
4. **Tryb ciemny (dark mode):** Użytkownicy mogą przełączać się między trybem jasnym a ciemnym.
5. **Responsywność:** Aplikacja działa poprawnie na urządzeniach mobilnych, tabletach i komputerach.

---

## **3. Napotkane wyzwania i ich rozwiązania**

### **3.1. Synchronizacja danych w local storage**
#### **Wyzwanie:**
Podczas implementacji mechanizmu zapisywania i odczytywania danych z local storage pojawił się problem z synchronizacją danych w czasie rzeczywistym. Zmiany wprowadzone w aplikacji nie były od razu widoczne w interfejsie użytkownika.

#### **Rozwiązanie:**
- Wykorzystano **reaktywność Svelte**, aby automatycznie aktualizować dane w interfejsie po każdej zmianie w local storage.
- Stworzono funkcję, która zapisuje dane do local storage za każdym razem, gdy lista zadań ulega zmianie:
  ```javascript
  import { writable } from "svelte/store";

  // Tworzenie reaktywnego stanu
  const tasks = writable(JSON.parse(localStorage.getItem("tasks")) || []);

  // Subskrypcja zmian i zapis do local storage
  tasks.subscribe((value) => {
    localStorage.setItem("tasks", JSON.stringify(value));
  });

  export default tasks;
  ```

---

### **3.2. Optymalizacja sortowania zadań**
#### **Wyzwanie:**
Sortowanie zadań według daty realizacji w przypadku dużej liczby zadań powodowało opóźnienia w renderowaniu listy.

#### **Rozwiązanie:**
- Zaimplementowano funkcję sortowania, która działa bezpośrednio na danych w local storage, co zmniejszyło obciążenie aplikacji:
  ```javascript
  function sortTasksByDate(tasks) {
    return tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  ```

---

### **3.3. Kontrast w trybie ciemnym**
#### **Wyzwanie:**
Podczas implementacji trybu ciemnego pojawił się problem z czytelnością tekstu i ikon na ciemnym tle.

#### **Rozwiązanie:**
- Zastosowano standardy WCAG (minimalny kontrast 4.5:1) przy wyborze kolorów.
- Wykorzystano zmienne CSS do definiowania kolorów w trybie jasnym i ciemnym:
  ```css
  :root {
    --background-light: #ffffff;
    --background-dark: #121212;
    --text-light: #000000;
    --text-dark: #ffffff;
  }

  body.light-mode {
    background-color: var(--background-light);
    color: var(--text-light);
  }

  body.dark-mode {
    background-color: var(--background-dark);
    color: var(--text-dark);
  }
  ```

---

### **3.4. Responsywność interfejsu**
#### **Wyzwanie:**
Niektóre elementy interfejsu, takie jak przyciski i pola tekstowe, nie były poprawnie skalowane na urządzeniach mobilnych.

#### **Rozwiązanie:**
- Wykorzystano **media queries** w CSS, aby dostosować rozmiary elementów do różnych rozdzielczości ekranu:
  ```css
  @media (max-width: 768px) {
    .task-item {
      font-size: 14px;
      padding: 10px;
    }
  }
  ```

---

## **4. Podsumowanie**
Podczas tworzenia aplikacji "To-Do" w Svelte podjęto kluczowe decyzje dotyczące wyboru technologii i implementacji funkcjonalności. Wykorzystanie Svelte pozwoliło na stworzenie lekkiej i wydajnej aplikacji, a zastosowanie local storage umożliwiło przechowywanie danych bez potrzeby backendu. Napotkane wyzwania, takie jak synchronizacja danych, optymalizacja sortowania, kontrast w trybie ciemnym oraz responsywność, zostały skutecznie rozwiązane, co pozwoliło na stworzenie aplikacji spełniającej założone cele.

Aplikacja jest gotowa do użytku i spełnia wymagania dotyczące funkcjonalności, wydajności i estetyki.
