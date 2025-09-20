import ProfileCard from "./components/ProfileCard";
import Home from "@/ui/Home";
import employeesJson from "@/ui/employees.json";

export default function Profiles() {
  console.log(__filename);
  const employees: Employee[] = employeesJson;
  return (
    <div className="flex flex-col min-h-screen bg-slate-500 [&>*:nth-child(4)]:items-end">
      <h1 className="text-6xl bg-slate-500 text-center py-3">Profiles</h1>
      <h1 className="flex justify-evenly text-2xl bg-slate-600 text-center py-3 md:text-4xl md:brightness-120">
        {employees.map((emp) => (
          <span key={employees.indexOf(emp)}>{emp.name}</span>
        ))}
      </h1>
      <main className="flex flex-col flex-grow-1 justify-center items-center gap-6 bg-slate-500 md:flex-row md:justify-evenly ">
        {employees.map((emp) => (
          <ProfileCard empl={emp} key={employees.indexOf(emp)} />
        ))}
      </main>
      <div className="flex flex-col m-6">
        <Home filename={__filename} />
      </div>
    </div>
  );
}
